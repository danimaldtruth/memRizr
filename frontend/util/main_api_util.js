export const createRating = (card_rating) => (
  $.ajax({
    url: `api/card_ratings`,
    method: 'POST',
    data: {card_rating}
  })
);

export const updateDeck = (deck) => (
  $.ajax({
    url: `api/decks/${deck.id}`,
    method: 'PATCH',
    data: { deck }
  })
);

export const deleteDeck = (id) => (
  $.ajax({
    url: `api/decks/${id}`,
    method: 'DELETE'
  })
);

export const fetchDeck = (id) => (
  $.ajax({
    url: `api/decks/${id}`
  })
);

//Fetch all subjects for browsing new ones
export const fetchAllSubjects = () => (
  $.ajax({
    url: 'api/subjects'
  })
);

//fetch only those subjects that the current user follows
export const fetchFollowedSubjects = () => (
  $.ajax({
    url: 'api/subject_follows'
  })
);

export const fetchSubjectDetail = (id) => {
  return $.ajax({
    url: `api/subjects/${id}`
  });
};

export const createSubject = (subject) => (
  $.ajax({
    url: `api/subjects/`,
    method: 'POST',
    data: {subject}
  })
);

export const createDeck = (deck) => (
  $.ajax({
      url: `api/decks`,
      method: 'POST',
      data: {deck}
  })
);

export const createTagging = (tagging) => (
  $.ajax({
    url: `api/taggings`,
    method: 'POST',
    data: { tagging }
  })
);

export const deleteTagging = (tag) => (
  $.ajax({
    url: `api/tags/${tag.id}`,
    method: 'DELETE',
    data: { tag }
  })
);

export const requestResults = (query) => {
  return(
    $.ajax({
      url: `api/subjects`,
      data: { query }
    })
  );
};

export const createFollow = (subjectId) => (
  $.ajax({
    url: `api/subject_follows`,
    method: 'POST',
    data: { subjectId }
  })
);

export const deleteFollow = (subjectId) => (
  $.ajax({
    url: `api/subject_follows/${subjectId}`,
    method: 'DELETE',
    data: { subjectId }
  })
);
