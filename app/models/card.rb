# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  deck_id    :integer          not null
#  question   :text             not null
#  answer     :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Card < ApplicationRecord
  validates :deck_id, :question, :answer, presence: true

  belongs_to(
    :deck,
    class_name: 'Deck',
    foreign_key: :deck_id,
    primary_key: :id
  )
  # has many ratings

  def getUserRating(user_id)
    # @rating = CardRating.find_by()
  end
end
