var wallets = args.widgetParameter;
var wallet = (wallets.replace(' ','')).split(';')
// Use the line above to enter wallet address through Scriptable Parameter User Interface when editing the widget on phone desktop

var n = 0;
 var usd = 0;
 var strong = 0;

while (n < wallet.length) {

  const cg = new Request('https://api.coingecko.com/api/v3/simple/price?ids=stronger&vs_currencies=usd');
  const cg_data = await cg.loadJSON();
  var cg_price = cg_data['stronger']['usd'];

  var balance_url = 'https://openapi.debank.com/v1/user/protocol?id=' + wallet[n] + '&protocol_id=strongblock' ;
  const req = new Request(balance_url);
  const data = await req.loadJSON();

  console.log(data);
  var resp = data;
  var total_cnt = resp['portfolio_item_list'].length;
  console.log(total_cnt);

  var i =0;
  while (i < total_cnt) {
    usd = usd + resp['portfolio_item_list'][i]['stats']['asset_usd_value'];
    strong = strong + resp['portfolio_item_list'][i]['detail']['token_list'][0]['amount'];
    i = i+1;
  }

  n =n +1;
}



var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
  });
  
var usd = strong * cg_price;

if (config.runsInWidget) {

  const widget = new ListWidget();
  widget.backgroundColor=new Color("#000000");
  const title = widget.addText("Strong Reward Balance");
  title.textColor = Color.white();
  title.textOpacity = 0.8;
  title.font = new Font("Helvetica-Light ", 10);

  widget.addSpacer(4);

  const strongtext = widget.addText(`STRNGR: ${strong.toFixed(2)}`);
  strongtext.textColor = Color.white();
  strongtext.font = new Font("Helvetica", 14);

  widget.addSpacer(2);

  const usdtext = widget.addText(`USD: ${formatter.format(usd.toFixed(0))}`);
  usdtext.textColor = Color.white();
  usdtext.font = new Font("Helvetica", 14);

  widget.addSpacer(4);

  const sig = widget.addText("@SithNode");
  sig.textColor = Color.red();
  sig.textOpacity = 0.8;
  sig.font = new Font("Helvetica", 10);
  Script.setWidget(widget);
  Script.complete();
  widget.presentMedium()
}
