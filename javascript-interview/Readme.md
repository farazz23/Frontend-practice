The "5-Step Framework" for Array Problems

:=When you see any array transformation problem, follow this pattern:
1. IDENTIFY: What's the input? What's the output?
2. FILTER: Do I need to remove some items?
3. GROUP: Do I need to group by a key?
4. TRANSFORM: Do I need to change the shape?
5. AGGREGATE: Do I need to sum/count/calculate?


:= Decision Tree for Choosing Methods

Need to remove items? →                 filter()
Need to transform each item? →          map()
Need to combine into one value? →       reduce()
Need to group by a key? →               reduce() or Map
Need to find one item? →                find()
Need to check all items? →              every()
Need to check some items? →             some()
Need to sort? →                         sort()


:= Common Patterns Cheatsheet
Scenario	                      Pattern	                  Example

Filter + Transform	            filter().map()	          Get active user names
Group + Summarize	              reduce() or Map	          Group orders by customer
Filter + Group + Summarize	    filter() + reduce()	      This problem!
Find + Transform	              find() + transform	      Get specific user profile
Count occurrences	              reduce()	                Count word frequencies
Sum values	                    reduce()	                Calculate total revenue
Extract unique values	          Set or Map	              Deduplicate array