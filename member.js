function skillsMember()
{
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberRegex = /^[a-zA-Z]+$/;

    if (member == "")
    {
        memberError.innerHTML = "Please enter your name";
        memberError.style.color = "red";
        return false;
    }
    else if (!member.match(memberRegex))
    {
        memberError.innerHTML = "Please enter a valid name";
        memberError.style.color = "red";
        return false;
    }
    else
    {
        memberError.innerHTML = "Valid";
        memberError.style.color = "green";
        return true;
    }
}