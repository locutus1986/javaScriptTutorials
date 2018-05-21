$(document).ready(() => {
  $(".deleteUser").on('click', deleteUser);
});

const deleteUser = () => {
  const confirmation = confirm("Are you sure?");

  if(confirmation){
    $.ajax({
      type: "DELETE",
      url: "/users/delete/" +$(this).data('id')
    }).done((response) => {
      window.location.replace('/');
    });

  }else{
    return false;
  }
}
