using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3.Lover_of_3
{
    class Program
    {
        static void Main()
        {
            var fieldSizes = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var rowsCount = fieldSizes[0];
            var colsCount = fieldSizes[1];

            var field = new bool[rowsCount, colsCount];
            var n = int.Parse(Console.ReadLine());
            long result = 0;

            int row = rowsCount - 1;
            int col = 0;
            int currentCell = 0;

            //magic
            for (int i = 0; i < n; i++)
            {
                var move = Console.ReadLine().Split(' ');

                var direction = move[0]; //direction    
                var repeats = int.Parse(move[1]); //repeat times

                var deltaRow = direction.Contains("U") ? -1 : 1;
                var deltaCol = direction.Contains("L") ? -1 : 1;

                for (int j = 1; j < repeats; j++)
                {
                    // can we go to [row + deltaRow, col + deltaCol]
                    //if yes
                    //go there
                    //if not collecte4d, collect
                    //if no
                    //stop the loop, break
                    if (IsInside(row + deltaRow, col + deltaCol, field))
                    {
                        //go there do stuff
                        row += deltaRow;
                        col += deltaCol;

                        if (deltaRow == -1 & deltaCol == 1)
                        {
                            currentCell += 6;
                        }
                        else if (deltaRow == 1 && deltaCol == -1)
                        {
                            currentCell -= 6;
                        }
                        //if not collected
                        if (!field[row, col])
                        {
                            result += currentCell;
                            field[row, col] = true;
                        }
                    }
                    else
                    {
                        break;
                    }
                }
            }
            Console.WriteLine(result);
        }

        static bool IsInside (int row, int col, bool [,] matrix)
        {
            bool rowIsInField = 0 <= row  && row < matrix.GetLength(0);
            bool colIsInField = 0 <= col && col  < matrix.GetLength(1);

            return rowIsInField && colIsInField;
        }
    }
}
