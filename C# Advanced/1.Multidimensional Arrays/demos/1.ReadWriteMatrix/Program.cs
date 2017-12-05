using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.ReadWriteMatrix
{
    class Program
    {
        static void Main()
        {

            Console.WriteLine("Number of rows = ");
            int rows = int.Parse(Console.ReadLine());
            Console.WriteLine("Number of columns = ");
            int cols = int.Parse(Console.ReadLine());

            // Allocate the matrix
            int[,] matrix = new int[rows, cols];

            // Enter the matrix elements
            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    Console.Write("matrix[{0},{1}] = ", row, col);
                    int element = int.Parse(Console.ReadLine());
                    matrix[row, col] = element;
                }
            }

            // Print the matrix on the console
            Console.WriteLine();
            Console.WriteLine("The matrix is as follows:");

            for (int row = 0; row < rows; row++)
            {
                for (int col = 0; col < cols; col++)
                {
                    Console.Write("{0} ", matrix[row, col]);
                }

                Console.WriteLine();
            }
        }
    }
}
