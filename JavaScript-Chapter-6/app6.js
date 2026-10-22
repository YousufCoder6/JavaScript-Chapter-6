// ==========================================
// CHAPTER 6: MATH EXPRESSIONS (UNFAMILIAR OPERATORS)
// ==========================================

function runPostIncrement() {
    var num = 1;
    var newNum = num++; // Post-increment

    document.write("<h1>Chapter 6 - Post-Increment (num++)</h1>");
    document.write("Initial num = 1<br>");
    document.write("var newNum = num++;<br><br>");
    document.write("<b>Result:</b><br>");
    document.write("newNum gets original value: <b>" + newNum + "</b><br>");
    document.write("num is incremented to: <b>" + num + "</b><br><br>");
    document.write("<a href='chapter6.html'>Go Back</a>");
}

function runPreIncrement() {
    var num = 1;
    var newNum = ++num; // Pre-increment

    document.write("<h1>Chapter 6 - Pre-Increment (++num)</h1>");
    document.write("Initial num = 1<br>");
    document.write("var newNum = ++num;<br><br>");
    document.write("<b>Result:</b><br>");
    document.write("num is incremented first, so newNum gets: <b>" + newNum + "</b><br>");
    document.write("num final value is: <b>" + num + "</b><br><br>");
    document.write("<a href='chapter6.html'>Go Back</a>");
}

function runPostDecrement() {
    var num = 1;
    var newNum = num--; // Post-decrement

    document.write("<h1>Chapter 6 - Post-Decrement (num--)</h1>");
    document.write("Initial num = 1<br>");
    document.write("var newNum = num--;<br><br>");
    document.write("<b>Result:</b><br>");
    document.write("newNum gets original value: <b>" + newNum + "</b><br>");
    document.write("num is decremented to: <b>" + num + "</b><br><br>");
    document.write("<a href='chapter6.html'>Go Back</a>");
}

function runPreDecrement() {
    var num = 1;
    var newNum = --num; // Pre-decrement

    document.write("<h1>Chapter 6 - Pre-Decrement (--num)</h1>");
    document.write("Initial num = 1<br>");
    document.write("var newNum = --num;<br><br>");
    document.write("<b>Result:</b><br>");
    document.write("num is decremented first, so both num and newNum wind up with: <b>" + newNum + "</b><br><br>");
    document.write("<a href='chapter6.html'>Go Back</a>");
}

function runComplexExample() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;

    document.write("<h1>Chapter 6 - Complex Expression Example</h1>");
    document.write("Given: var a = 2, b = 1;<br>");
    document.write("Expression: var result = --a - --b + ++b + b--;<br><br>");
    document.write("<b>Step-by-step evaluation:</b><br>");
    document.write("--a gives 1 (a becomes 1)<br>");
    document.write("--b gives 0 (b becomes 0)<br>");
    document.write("++b gives 1 (b becomes 1)<br>");
    document.write("b-- gives 1 (b becomes 0 after expression)<br><br>");
    document.write("Final Calculated Result = <b>" + result + "</b><br><br>");
    document.write("<a href='chapter6.html'>Go Back</a>");
}