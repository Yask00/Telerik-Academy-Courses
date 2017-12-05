using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.AppearanceCount
{
    class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            int[] numbers = new int[count];
            numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            int searchedNumber = int.Parse(Console.ReadLine());

            Console.WriteLine(AppearanceCount(searchedNumber, numbers));
           
        }


        static int AppearanceCount(int searched, int[] numbers)
        {
            int count = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (searched == numbers[i])
                {
                    count += 1;
                }
            }
            return count;
        }
    }
}
