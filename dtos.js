class ExitListItem {
  constructor(item){
    this.exit_name = item.exit_name;
    this.activity = item.activity
  }
}

class MeanExit {
  constructor(mean, median){
    this.mean = mean;
    this.median = median;
  }
}

module.exports = {ExitListItem, MeanExit};