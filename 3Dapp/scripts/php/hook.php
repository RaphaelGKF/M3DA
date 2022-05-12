<?php 

// Path to thumbnails
$directory = '../assets/images/gallery_images';
// Extension check
$allowed_extensions = array('jpg', 'jpeg', 'png');

$file_parts = array();

// response message
$response = "";
// opens directory to parse the images
$dir_handle = opendir($directory);

// run through all the files
while ($file = readdir($dir_handle)){
        // Checking for hidden files
    if (substr($file, 0, 1) != '.'){
        //Splitting file name to grab file extension
        $file_components = explode('.', $file);
        // Grabbing the extension token
        $extension = strtolower(array_pop($file_components));
        // Check if file valid. yes? add response
        if (in_array($extension, $allowed_extensions))
        {
            $response .= $directory. '/'.$file.'~';
        }
    }
}

closedir ($dir_handle);
// Return response
echo substr_replace($response,"",-1)
?>