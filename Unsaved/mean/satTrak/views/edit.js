<!doctype html>
<html lang="en">
<head>
  <title>EDIT</title>
</head>

<body>
  <h1>EDIT</h1>

  <form class="sat-form" action="/sats/<%= sat._id %>?_method=PUT" method="post">



    <div class="form-group">
      <label for="noradNum">NORAD Num.</label>
      <input type="number"
        class="form-control"
        name="noradNum"
        value="<%= sat.noradNum %>">
    </div>
</form>
  <div class="container">
    <p></p>
  </div>
</body>
</html>
