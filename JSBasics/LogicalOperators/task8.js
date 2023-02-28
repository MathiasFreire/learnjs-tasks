if (-1 || 0) alert( 'first' ); // выполнится, -1 == true
if (-1 && 0) alert( 'second' ); // false, т.к. 0 есть
if (null || -1 && 1) alert( 'third' ); // null || 1 == true