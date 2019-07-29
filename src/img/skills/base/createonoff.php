<?php
if(!defined('__DIR__')) { 
    $iPos = strrpos(__FILE__, "/"); 
    define("__DIR__", substr(__FILE__, 0, $iPos) . "/"); 
} 

create(__DIR__."/actions.jpg", __DIR__."/../../war/actions.jpg", 128);
echo "create actions... Ok<br/>\n";

for ($i=1; $i<200; $i++)
{
	$fn=__DIR__."/$i.jpg";
	
	$fnout=__DIR__."/../{$i}.jpg";
	
	if (!file_exists($fn))
	{
		echo "create $i... Not found<br/>\n";
		continue;
	}
	create($fn, $fnout);
	echo "create $i... Ok<br/>\n";
}

function create($fnin, $fnout, $x=64, $y=64)
{
	$image=imagecreatefromjpeg($fnin);
	
	$out=  imagecreatetruecolor($x, $y*3);
	
	// image ready image
	imagecopy($out, $image, 0, 0, 0, 0, $x, $y);
	
	// create used image
	$img=imagecreatetruecolor($x, $y);
	imagecopy($img, $image, 0, 0, 0, 0, $x, $y);
	imagefilter($img, IMG_FILTER_COLORIZE, 0x60, 0x60, 0x60, 0x0);
	imagecopy($out, $img, 0, $y, 0, 0, $x, $y);
	
	// create off image
	$img=imagecreatetruecolor($x, $y);
	imagecopy($img, $image, 0, 0, 0, 0, $x, $y);
	imagefilter($img, IMG_FILTER_GRAYSCALE);
	imagecopy($out, $img, 0, $y*2, 0, 0, $x, $y);
	
	imagejpeg($out,$fnout);
	
}
