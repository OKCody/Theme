var idx = lunr(function () {
  this.ref('name')
  this.field('text')
  this.metadataWhitelist = ['position']

  window.index.forEach(function (doc) {
    this.add(doc)
  }, this)
})
