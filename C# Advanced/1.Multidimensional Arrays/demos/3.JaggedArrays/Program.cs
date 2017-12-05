using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3.JaggedArrays
{
    class Program
    {
        static void Main()
        {

            int[] numbers = { 0, 1, 4, 113, 55, 3, 1, 2, 66, 557, 124, 2 }; //12 elements
            int[] sizes = new int[3]; //3 elements
            int[] offsets = new int[3]; //3 elements

            foreach (var number in numbers)
            {
                int remainder = number % 3;
                sizes[remainder]++;
            }

            // Calculate the list of numbers for each reminder (0, 1 and 2)
            int[][] numbersByRemainder = new int[3][]
                                        {
                                        new int[sizes[0]],
                                        new int[sizes[1]],
                                        new int[sizes[2]]
                                        };


            foreach (var number in numbers)
            {
                int remainder = number % 3;
                int index = offsets[remainder];
                offsets[remainder]++;
                numbersByRemainder[remainder][index] = number;
            }

            // Print the result jagged array
            for (int row = 0; row < numbersByRemainder.GetLength(0); row++)
            {
                foreach (var num in numbersByRemainder[row])
                {
                    Console.Write(num + " ");
                }
                Console.WriteLine();
            }

        }
    }
}
