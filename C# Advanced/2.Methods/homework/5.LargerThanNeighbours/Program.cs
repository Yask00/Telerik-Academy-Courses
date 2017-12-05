using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5.LargerThanNeighbours
{
    class Program
    {
        static void Main()
        {
            int count = int.Parse(Console.ReadLine());
            int[] numbers = new int[count];
            numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            Console.WriteLine(LargerThanNeighbours(numbers));
            
        }

        static int LargerThanNeighbours(int [] numbers)
        {
            int count = 0;
            for (int i = 1; i < numbers.Length - 1; i++)
            {
                if (numbers[i -1] < numbers[i] && numbers[i] > numbers[i + 1])
                {
                    count += 1;
                }
            }
            return count;
        }
    }
}
