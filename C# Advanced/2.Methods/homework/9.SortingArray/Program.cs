using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _9.SortingArray
{
    class Program
    {
        public static void Main(string[] args)
        {
            var N = int.Parse(Console.ReadLine());
            var Numbers = ConvertToArray(Console.ReadLine());
            Array.Sort(Numbers);
            Console.WriteLine(string.Join(" ", Numbers));
        }

        private static int[] ConvertToArray(string number)
        {
            int[] num = number
                .Split(' ')
                .Select(int.Parse)
                .ToArray();
            return num;
        }
    }
}
