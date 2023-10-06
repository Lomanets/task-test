function countElementsInArray($array, $value) {
    $count = 0;

    foreach ($array as $item) {
        if (is_array($item)) {
            $count += countElementsInArray($item, $value);
        } else {
            if ($item == $value) {
                $count++;
            }
        }
    }

    return $count;
}

$nestedArray = array(
    1,
    2,
    array(
        3,
        4,
        array(
            5,
            6,
        ),
    ),
    7,
    8,
);

$count = countElementsInArray($nestedArray, 5);
echo "Количество элементов со значением 5: " . $count;