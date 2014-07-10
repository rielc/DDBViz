var casper = require('casper').create();

var href;

casper.start('https://www.deutsche-digitale-bibliothek.de/searchresults?query=affiliate%3A%28%22Willy+Pragher%22%29&rows=20&viewType=grid&sort=RELEVANCE', function() {
    href = this.evaluate(function () {
        //return 'https://www.deutsche-digitale-bibliothek.de' + __utils__.findOne('.thumbnail-wrapper img').getAttribute('src');
        this.download('https://www.deutsche-digitale-bibliothek.de' + __utils__.findOne('.thumbnail-wrapper img').getAttribute('src'),"a.jpg");
    });
});

casper.run(function() {
    this.echo(href).exit();
});



/*


<div class="thumbnail-wrapper span3">
  <div class="thumbnail" >
      <img src="/binary/CCZE3HQGCNNYTPITJX63VWEUSL7MRBOW/list/1.jpg" alt="Müllheim: Bürgerhaus; Grußwort; Bürgermeister Sänger, Müllheim">
    </a>
  </div>
  <div class="item-options bl">
    <ul class="item-options-ul">
      
      
        
      
      
        <li>
          <div class="compare bb" data-iid="CCZE3HQGCNNYTPITJX63VWEUSL7MRBOW" title="Objekt vergleichen"></div>
        </li>
      
      <li>
        <div class="information bb">
          <div class="hovercard-info-item" data-iid="CCZE3HQGCNNYTPITJX63VWEUSL7MRBOW">
            <h4>Müllheim: Bürgerhaus; Grußwort; Bürgermeister Sänger, Müllheim</h4>
            <ul class="unstyled">
              <li>
                <div class="small-loader"></div>
              </li>
            </ul>
          </div>
        </div>
      </li>

    </ul>
  </div>
</div>


*/