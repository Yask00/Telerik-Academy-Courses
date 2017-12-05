using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace Hint
{
    class Program
    {

        static void Main(string[] args)
        {
            int[] startPos = {0, 0}; //starting postition 0 0

            var fieldSizes = Console.ReadLine().Split('x').Select(int.Parse).ToArray();

            var rowsCount = fieldSizes[0];
            var colsCount = fieldSizes[1];

            string [,] matrix = new string[rowsCount, colsCount];

            var movements = Console.ReadLine().Split(',');

            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    matrix[i,j] = Console.ReadLine();
                    
                }
            }

            


        }
    }
}
