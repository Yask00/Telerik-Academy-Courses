using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _6.FirstLargerThanNeighbours
{
    class Program
    {
        static void Main()
        {
            int count = int.Parse(Console.ReadLine());
            int[] numbers = new int[count];
            numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();

            Console.WriteLine(FirstLargerThanNeighbours(numbers));

        }

        static int FirstLargerThanNeighbours(int[] numbers)
        {
            
            for (int i = 1; i < numbers.Length - 1; i++)
            {
                if (numbers[i - 1] < numbers[i] && numbers[i] > numbers[i + 1])
                {
                    return i;
                }
            }
            return -1;
        }
    }
}
