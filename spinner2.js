const animation = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
const delay = 100;

const animateText = (index) => {
  if (index === animation.length) {
    process.stdout.write('\n');
    return;
  }

  setTimeout(() => {
    process.stdout.write(`\r${animation[index]}   `);
    animateText(index + 1);
  }, delay);
};

animateText(0);