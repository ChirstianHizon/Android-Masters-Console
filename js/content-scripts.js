

// ------------------------------------------------------------------------------------ //
var data_collection = [],data_id = [];
db.collection("Projects")
.onSnapshot(function(querySnapshot) {

    data_id = [];
    data_collection = [];

    querySnapshot.forEach(function(doc) {

      data_id.push( doc.id );
      data_collection.push( doc.data() );

    });

    console.log(data_id);
    console.log(data_collection);
    // console.log(data_id.indexOf("2ByzymVQGa6tb9f0uKoU") );

});

// --------------------------------------------------------------------------------------//

function createProjectLists() {

}

// -------------------- --------------------------------------------------------------- //

function getProjectDetails(){
  var project = {
    name: document.getElementById("name").value,
    current:"0",
    date:new Date(),
    completion_date:new Date(),
    goal:document.getElementById("goal").value.toString(),
    image:document.getElementById("image").value,
    logo:document.getElementById("logo").value,
    organization:document.getElementById("org").value
  };


  db.collection("Projects").doc().set(project)
  .then(function() {
      console.log("Document successfully written!");
      alert("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

  return false;
}

// --------------------------------------------------------------------------------------

var file;

function getimage(event) {
  file = event.target.files[0];
  console.log(file);
}

function addImage() {
  return false;
}
