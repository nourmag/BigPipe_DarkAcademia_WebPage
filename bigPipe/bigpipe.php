<?php
require 'vendor/autoload.php'; // Include the Facebook BigPipe library

$bigpipe = new big_pipe\BigPipe();
$bigpipe->startPagelet('pagelet1');
?>

<?php
$bigpipe->finishPagelet('pagelet1');
$bigpipe->finishPagelet('pagelet2');
$bigpipe->finishPagelet('pagelet3');
$bigpipe->finishPagelet('pagelet4');
$bigpipe->finishPagelet('pagelet5');
$bigpipe->finishPagelet('pagelet6');
echo $bigpipe->flush();
?>