var nodes = args.widgetParameter;
var n = 0;
var usd = 0;
var strong = 0;
var rate = .095;
const cg = new Request('https://api.coingecko.com/api/v3/simple/price?ids=stronger&vs_currencies=usd');
const cg_data = await cg.loadJSON();
var cg_price = cg_data['stronger']['usd'];
var price = cg_price;
var rewardstr = rate * nodes;
var reward = rewardstr * price - (nodes*15/30);
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
  });

if (config.runsInWidget) {
    const widget = new ListWidget();
    widget.backgroundColor=new Color("#000000");
    const title = widget.addText(`${(nodes)} Nodes x ${(rate)} Rewards/Day`);
    title.textColor = Color.white();
    title.textOpacity = 0.8;
    title.font = new Font("Helvetica-Light ", 8);

    widget.addSpacer(4);

    const daily = widget.addText(`Daily: ${formatter.format((reward*1).toFixed(0))}`);
    daily.textColor = Color.white();
    daily.font = new Font("Helvetica", 14);
    const daily2 = widget.addText(`Daily: ${((rewardstr).toFixed(1))}`);
    daily2.textColor = Color.white();
    daily2.font = new Font("Helvetica", 8);

    widget.addSpacer(2);

    const weekly = widget.addText(`Weekly: ${formatter.format((reward*7).toFixed(0))}`);
    weekly.textColor = Color.white();
    weekly.font = new Font("Helvetica", 14);
    const weekly2 = widget.addText(`Weekly: ${(rewardstr*7).toFixed(1)}`);
    weekly2.textColor = Color.white();
    weekly2.font = new Font("Helvetica", 8);

    widget.addSpacer(2);

    const monthly = widget.addText(`Monthly: ${formatter.format((reward*30).toFixed(0))}`);
    monthly.textColor = Color.white();
    monthly.font = new Font("Helvetica", 14);
    const monthly2 = widget.addText(`Monthly: ${(rewardstr*30).toFixed(1)}`);
    monthly2.textColor = Color.white();
    monthly2.font = new Font("Helvetica", 8);

    widget.addSpacer(2);

    const yearly = widget.addText(`Yearly: ${formatter.format((reward*365).toFixed(0))}`);
    yearly.textColor = Color.white();
    yearly.font = new Font("Helvetica", 14);
    const yearly2 = widget.addText(`Yearly: ${(rewardstr*365).toFixed(1)}`);
    yearly2.textColor = Color.white();
    yearly2.font = new Font("Helvetica", 8);

    Script.setWidget(widget);
    Script.complete();
    widget.presentMedium()
}
