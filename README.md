# matratech-test

I have written answers thinking have to write as a plain java script function , so could not attach cheerio module usage, I am adding code snippet if we use node and express
where app is the express instance and cheerio is the instance of cheerio module.

app.get('/scrape',(req,res) => {
  request('https://blog.hubspot.com/marketing/beginner-blogger-mistakes', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var tagName = 'meta'
    var loadData = cheerio.load(html);
    console.log(loadData.html(tagName));
    res.status(200).json({"metatags":loadData.html(tagName)});
  }
});
})
