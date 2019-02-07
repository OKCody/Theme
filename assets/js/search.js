var idx = lunr(function () {
  this.ref('name')
  this.field('text')

  window.index.forEach(function (doc) {
    this.add(doc)
  }, this)
})
