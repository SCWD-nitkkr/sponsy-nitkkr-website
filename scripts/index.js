/* ----------- TEAMS -------------- */
setInterval(ColorChange,5000);
var elements=document.getElementById('team-id').children;
var n = elements.length;
var i = 0;
var prev = n-1;
function ColorChange()
{
    elements[prev].classList.remove("active");
    elements[i].classList.add("active");
    prev = i;
    if ( i == n-1)
        i=0;
    else
        i++;
}

// ----------- TEAMS END -------------