export function formatComments(numberOfComments: number) {
  const digitsNumberInNumber = `${numberOfComments}`.length;
  const numberWithoutHundred =
    digitsNumberInNumber < 2
      ? numberOfComments % Math.pow(10, digitsNumberInNumber)
      : numberOfComments;

  let ending: string;

  if (numberWithoutHundred % 10 === 1 && numberWithoutHundred !== 11) {
    ending = 'й';
  } else if ([2, 3, 4].includes(numberWithoutHundred % 10)) {
    ending = 'я';
  } else ending = 'ев';

  return `${numberWithoutHundred} комментари${ending}`;
}
