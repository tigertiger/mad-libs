$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    const time1Input = $("input#time1").val();
    const adverb1Input = $("input#adverb1").val();
    const pluralNoun1Input = $("input#pluralNoun1").val();
    const food1Input = $("input#food1").val();
    const adjective2Input = $("input#adjective2").val();
    const person2Input = $("input#person2").val();
    const exclamationInput = $("input#exclamation").val();

    $(".person1").append(person1Input);
    $(".time1").append(time1Input);
    $(".adverb1").append(adverb1Input);
    $(".pluralNoun1").append(pluralNoun1Input);
    $(".food1").append(food1Input);
    $(".adjective2").append(adjective2Input);
    $(".person2").append(person2Input);
    $(".exclamation").append(exclamationInput);

    $("#story").show();

  });
});