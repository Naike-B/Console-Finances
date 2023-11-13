// Dataset composed of arrays with two fields: Dates and Profit/Losses 
var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

// Sets variables for the calculations required to analyse the data in the variable finances
var numberOfMonths = finances.length; // Uses .length to get the total number of months included in the variable finances
var currentMonth = 0; // Value is set to 0 - Indicates that the variable stores a numeric value
var totalProfitLosses = 0; // Value is set to 0 - Indicates that the variable stores a numeric value
var previousMonth = 0; // Value is set to 0 - Indicates that the variable stores a numeric value
var monthChange = 0; // Value is set to 0 - Indicates that the variable stores a numeric value
var totalChange = 0; // Value is set to 0 - Indicates that the variable stores a numeric value
var averageChange = 0; // Value is set to 0 - Indicates that the variable stores a numeric value
var greatestIncrease = 0; // Value is set to 0 - Indicates that the variable stores a numeric value
var greatestIncreaseMonth = ""; // Value is set to "" - Indicates that the variable stores a string
var greatestDecrease = 0; // Value is set to 0 - Indicates that the variable stores a numeric value
var greatestDecreaseMonth = ""; // Value is set to "" - Indicates that the variable stores a string

// Net total amount of Profit/Losses over the entire period
/* Uses a for loop to make calculations using the values stored in the finances variable
Initialisation: creates variable i (or index), and sets its value as 0 (var i=0;). This variable acts as the counter.
Condition: sets the number of times the loop should run for (i<numberOfMonths;). This loop will run based on the numberOfMonths value which is 86.
Update: Every time the loop runs the statements in the curly braces, it adds one to the counter (i++).
Gets the current month Profit/Loss value that is stored in each array in the dataset.
Calculates the total Profit/Losses adding up the Profit/Loss value of each month.
*/
for (var i = 0; i < numberOfMonths; i++) {
  currentMonth = finances[i][1];
  totalProfitLosses = totalProfitLosses + currentMonth;
  // Total changes in Profit/Losses from month to month
  /* Uses an if statement in the same loop and sets the condition if (i<0) is true -> execute the statement in the curly braces.
  Statement: the month to month change (monthChange) is equal to the current month's value (currentMonth) minus the previous month's value (previousMonth).
  After the if statement but still inside the loop the value of the previousMonth is set to be equal as the value of the currentMonth.
  The total difference between months is calculated adding the totalChange initial value which is 0 to the monthChange value so the difference between months in the dataset calculated on every iteration of the loop.
  */
  if (i > 0) {
    monthChange = currentMonth - previousMonth;
  }
  previousMonth = currentMonth;
  totalChange = totalChange + monthChange;
  // Greatest increase in Profit/Losses over the entire period
  /* The variable greatestIncrease is set to 0 and the variable greatestIncreaseMonth is set to "" (empty string). Every time that the for loop runs and compares the value of the currentMonth and previousMonth calculating the difference, when the if condition is met and a higher difference (monthChange) value is found then the value of greatestIncrease and greatestIncreaseMonth is updated returning the highest difference stored in the variable greatestIncrease and the month and year of the current iteration that is stored in the greatestIncreaseMonth.*/
  if (monthChange > greatestIncrease) {
    greatestIncrease = monthChange;
    greatestIncreaseMonth = finances[i][0];
  }
  // Greatest decrease in Profit/Losses over the entire period
  /* The variable greatestDecrease is set to 0 and the variable greatestDecreaseMonth is set to "" (empty string). Every time that the for loop runs and compares the value of the currentMonth and previousMonth calculating the difference, when the if condition is met and a lower difference (monthChange) value is found then the value of greatestDecrease and greatestDecreaseMonth is updated returning the lowest difference stored in the variable greatestDecrease and the month and year of the current iteration that is stored in the greatestDecreaseMonth.
  */
  if (monthChange < greatestDecrease) {
    greatestDecrease = monthChange;
    greatestDecreaseMonth = finances[i][0];
  }
}
/* Outside of the for loop, the average difference between months (averageChange) is calculated dividing the total difference by the total number of months -1 (because there is one less change than there are months).The Math.round method is used to round the number to its nearest 100th */
averageChange = Math.round(totalChange / (numberOfMonths - 1) * 100) / 100;
// Logs data to console
console.log("Financial Analysis\n---------------------" + "\n" + "Total Months: " + numberOfMonths + "\n" + "Total: $" + totalProfitLosses + "\n" + "Average Change: " + averageChange + "\n" + "Greatest Increase in Profits/Losses: " + greatestIncreaseMonth, "($" + greatestIncrease + ")" + "\n" + "Greatest Decrease in Profits/Losses: " + greatestDecreaseMonth, "($" + greatestDecrease + ")");