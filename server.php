<?php

/*** 
 * Menjalankan Local Development Server di 127.0.0.1:5000
 */

$php = escapeshellarg(PHP_BINARY);
$host = '127.0.0.1:5000';
fwrite(STDOUT, 'Local Development Server PHP Berjalan di http://' . $host . PHP_EOL);
fwrite(STDOUT, 'Tekan CTRL+C untuk Menutup Local Development Server' . PHP_EOL);

passthru($php . ' -S ' . $host);
