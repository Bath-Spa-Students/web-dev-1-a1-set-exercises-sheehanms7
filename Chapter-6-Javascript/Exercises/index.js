document.getElementById("calculateButton").addEventListener("click", function() {
    var costPerLiter = parseFloat(document.getElementById("cost").value);
    var liters = parseFloat(document.getElementById("liters").value);
    
    var totalCostAed = costPerLiter * liters;
    
    document.getElementById("totalCost").innerText = "Total Cost: AED " + totalCostAed.toFixed(2);
  });