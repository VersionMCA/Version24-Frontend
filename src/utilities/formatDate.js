function formatDate(inputDate) {
  // Convert input date string to a Date object
  const date = new Date(inputDate);

  // Array of month names
  const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Get the day, month, and year
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Function to add ordinal suffix to day
  function getOrdinalSuffix(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  // Format the date with ordinal suffix
  const formattedDate = `${day + getOrdinalSuffix(day)} ${monthNames[monthIndex]} ${year}`;

  return formattedDate;
}

export default formatDate;
