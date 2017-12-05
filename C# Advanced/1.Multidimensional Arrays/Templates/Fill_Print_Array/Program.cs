using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fill_Print_Array
{
    class Program
    {
        static void Main()
        {
            int rows = 3; // int.Parse(Console.ReadLine());
            int cols = 3; // int.Parse(Console.ReadLine());
            int[,] matrix = new int[rows, cols];

            FillMatrix(matrix);
            PrintMatrix(matrix);
        }

        static int[,] FillMatrix(int[,] matrixToFill)
        {
            for (int i = 0; i < matrixToFill.GetLength(0); i++)
            {
                for (int j = 0; j < matrixToFill.GetLength(1); j++)
                {
                    matrixToFill[i, j] = 1 * i;
                }
            }
            return matrixToFill;
        }


        static void PrintMatrix(int[,] matrix)
        {
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    Console.Write(matrix[i, j] + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
