var calculate = {
    spd: function (SPH, day) {
      var sday = SPH * day;
      console.log('Salary per day: ' + sday + '\n');
    },

    swd: function (sday, sixd) {
      var withoutd = sday * sixd;
      console.log('Salary within 6 days: ' + withoutd + '\n');
    },

    td: function (withoutd, tax) {
      var XD = withoutd * tax;
      console.log('Tax Deduction: ' + XD + '\n');
    },

    tde: function (OtherD, XD) {
      var totalD = OtherD + XD;
      console.log('Total deductions: ' + totalD + '\n');
    },

    nets: function (withoutd, totalD) {
      var netsal = withoutd - totalD;
      console.log('The net salary: ' + netsal);
    },
  };

module.exports = calculate;
  