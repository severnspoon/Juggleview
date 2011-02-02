function(doc) {
  if (doc.created_at) {
    emit(doc.complexity, doc);
  }
};