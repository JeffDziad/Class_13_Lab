$(document).ready(function ()
{
    var students = [];

    var modal = $("#myModal");
    var span = $(".close");

    $("form").submit(handleSubmit);
    $("#viewArray").click(viewStudents);
    $("#sortArrayByName").click(sortName);
    $("#sortArrayByPercent").click(sortPercent);
    span.click(closeModal);

    function closeModal()
    {
        modal.css("display", "none");
    }

    function handleSubmit(event)
    {
        var student = {};
        console.log("handleSubmit()");
        event.preventDefault();
        student.firstName = $("#fName").val();
        student.lastName = $("#lName").val();
        student.pointsEarned = $("#pEarned").val();
        student.pointsPossible = $("#pPossible").val();
        console.log(student);

        var outputName = student.firstName + ' ' + student.lastName;
        var percentGrade = (student.pointsEarned / student.pointsPossible) * 100;
        var letterGrade = '';

        if(isNaN(percentGrade))
        {
            percentGrade = 0;
        }

        if(outputName.length <= 1)
        {
            outputName = 'Unknown';
        }

        if(percentGrade >= 92 && percentGrade <= 100)
        {
            letterGrade = 'A';
        }
        else if(percentGrade >= 83 && percentGrade <= 91)
        {
            letterGrade = 'B';
        }
        else if(percentGrade >= 74 && percentGrade <= 82)
        {
            letterGrade = 'C';
        }
        else if(percentGrade >= 65 && percentGrade <= 73)
        {
            letterGrade = 'D';
        }
        else
        {
            letterGrade = 'F';
        }

        student.letterGrade = letterGrade;
        student.percentGrade = percentGrade.toFixed(2);

        if(!(student.lastName === ""))
        {
            students.push(student);
            $("#output").text("Student Added Successfully!");
            modal.css("display", "block");
        }
    }

    function viewStudents()
    {
        $("#output").text("");
        for(var i = 0; i < students.length; i++)
        {
            $("#output").append(`[${i + 1}]\nName: ${students[i].lastName + ', ' + students[i].firstName}\nPercent Grade: ${students[i].percentGrade}%\nLetter Grade: ${students[i].letterGrade}\n`);
        }
        modal.css("display", "block");
    }

    function sortName()
    {
        students.sort(sortByName);
        viewStudents();
    }

    function sortByName(a, b)
    {
        if(a.lastName < b.lastName)
            return -1;
        if(a.lastName > b.lastName)
            return 1;
        else
            return 0;
    }

    function sortPercent()
    {
        students.sort(sortByPercent);
        viewStudents();
    }

    function sortByPercent(a, b)
    {
        if(a.percentGrade < b.percentGrade)
            return -1;
        if(a.percentGrade > b.percentGrade)
            return 1;
        else
            return 0;
    }
});