<?php
require 'D:/UniServerZ/www/bytebarn/vendor/autoload.php';

use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\Image\SvgImageBackEnd;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;

$renderer = new ImageRenderer(
    new RendererStyle(240, 2),
    new SvgImageBackEnd()
);
$writer = new Writer($renderer);

$pages = [
    'index' => 'https://nishanth0303.github.io/Nishanth-portfolio/',
    'full-stack' => 'https://nishanth0303.github.io/Nishanth-portfolio/full-stack.html',
    'software-dev' => 'https://nishanth0303.github.io/Nishanth-portfolio/software-dev.html',
    'application-dev' => 'https://nishanth0303.github.io/Nishanth-portfolio/application-dev.html',
    'php-dev' => 'https://nishanth0303.github.io/Nishanth-portfolio/php-dev.html',
    'general-dev' => 'https://nishanth0303.github.io/Nishanth-portfolio/general-dev.html',
];

foreach ($pages as $name => $url) {
    $svg = $writer->writeString($url);
    file_put_contents(__DIR__ . "/qr-{$name}.svg", $svg);
    echo "Generated qr-{$name}.svg for {$url}\n";
}
file_put_contents(__DIR__ . "/qr-portfolio.svg", $writer->writeString('https://nishanth0303.github.io/Nishanth-portfolio/'));
echo "Done!\n";
