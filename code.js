$(document).ready(function ()
{
    var student = {};

    var modal = $("#myModal");
    var span = $(".close");

    $("form").submit(handleSubmit);

    span.click(closeModal);

    function closeModal()
    {
        modal.css("display", "none");
    }

    function handleSubmit(event)
    {
        console.log("handleSubmit()");
        event.preventDefault();

        student.firstName = $("#fName").val();
        student.lastName = $("#lName").val();
        student.pointsEarned = $("#pEarned").val();
        student.pointsPossible = $("#pPossible").val();

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

        $("#outputName").html(`<strong>Name:</strong> ${outputName}`);
        $("#outputPercent").html(`<strong>Percent Grade:</strong> ${percentGrade.toFixed(2)}%`);
        $("#outputGrade").html(`<strong>Letter Grade:</strong> ${letterGrade}`);
        modal.css("display", "block");
    }

});