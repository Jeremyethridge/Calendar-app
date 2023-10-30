$(function () {
  $(".saveBtn").on("click", function () {
    const timeBlock = $(this).parent(".time-block");
    const timeBlockId = timeBlock.attr("id");
    const userInput = timeBlock.find(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  const currentHour = getCurrentHour();

  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").split("-")[1]);

    $(this).removeClass("past present future");

    if (blockHour <= currentHour && currentHour < blockHour + 1) {
      $(this).addClass("present");
    } else if (blockHour < currentHour) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future");
    }
  });

  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");
    const savedInput = localStorage.getItem(timeBlockId);
    $(this).find(".description").val(savedInput);
  });

  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});

function getCurrentHour() {
  const currentHour = dayjs().format("HH");
  return currentHour;
}
