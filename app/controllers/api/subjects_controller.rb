class Api::SubjectsController < ApplicationController

  def index
    params.permit(:query)
    query = params[:query]
    p query
    if query
      search_table = Subject.left_outer_joins(decks: { taggings: :tag })
      @subjects = search_table.where("subjects.title like :query or decks.title like :query or tags.tag_name like :query", { query: "#{query}%"})
    else
      @subjects = Subject.all
    end
  end

  def show
    @subject = Subject.find_by(id: params[:id])

    unless @subject
      @subject = Subject.new
    end
  end

  def create
    @subject = Subject.new(subject_params)

    if @subject.save
      SubjectFollow.create(user_id: @subject.creator_id, subject_id: @subject.id)
      render 'api/subjects/show'
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def update
    @subject = Subject.find(params[:id])

    if @subject.update(subject_params)
      render 'api/subjects/show'
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def delete
    @subject = Subject.find(params[:id])
    @subject.destroy
    render 'api/subjects/show'
  end

  private
  def subject_params
    params.require(:subject).permit(:title, :creator_id)
  end
end
