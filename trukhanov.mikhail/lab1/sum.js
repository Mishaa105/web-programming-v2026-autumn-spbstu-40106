'use strict';

function getColumnSum(columnId)
{
  let sum = 0;

  const cells = document.querySelectorAll(`tbody tr td:nth-child(${columnId})`);

  for (let i = 0, len = cells.length; i < len; i++)
  {
    sum += Number(cells[i].textContent);
  }

  return sum;
}
