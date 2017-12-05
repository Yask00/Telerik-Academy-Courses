using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.GetLargestNumber
{
    class Program
    {
        static void Main()
        {
            string numbers = Console.ReadLine();
            string [] numArr = numbers.Split(' ');
            int length = numArr.Length;

            int maxNumber = int.MinValue;

            for (int i = 0; i < length - 1; i++)
            {
                int currentMax = GetMax(int.Parse(numArr[i]), int.Parse(numArr[i + 1]));
                if (currentMax > maxNumber)
                {
                    maxNumber = currentMax;
                }
            }
            Console.WriteLine(maxNumber);
        }

        static int GetMax(int first, int second)
        {
            int largest = first;
            if (second > first)
            {
                largest = second;
            }
            
            return largest;
        }
    }
}
