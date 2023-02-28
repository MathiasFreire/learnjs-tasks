let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[Math.floor(styles.length / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");
alert(styles)