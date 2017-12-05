using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LiveDemos
{
    class Program
    {
        static void Main()
        {
            int[,] matrixFromConsole = ReadMatrix(3, 4);
            PrintMatrix(matrixFromConsole);
            IndexOf(matrixFromConsole, 5); 
        }

        static void PrintMatrix(int[,] matrix)
        {
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    Console.Write("{0, 4}", matrix[i, j]);
                }
                Console.WriteLine();
            }
        }

        static int[,] ReadMatrix(int rows, int cols)
        {
            int[,] result = new int[rows, cols];

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    result[row, col] = int.Parse(Console.ReadLine());
                }
            }
            return result;
        }

        static int IndexOf(int[,] symbols, int seekValue)
        {
            for (int i = 0; i < symbols.GetLength(0); i++)
            {
                for (int j = 0; j < symbols.GetLength(1); j++)
                {
                    if (symbols[i, j] == seekValue)
                    {
                        Console.WriteLine(i + " " + j);
                        //return i; // on which row
                    }
                }
            }

            return -1;
        }

    }
}
