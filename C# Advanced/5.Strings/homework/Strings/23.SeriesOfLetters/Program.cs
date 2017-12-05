using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _23.SeriesOfLetters
{
    class Program
    {
        static void Main()
        {
            string str = Console.ReadLine();

            StringBuilder answer = new StringBuilder();

            answer.Append(str[0]);

            for (int i = 1; i < str.Length; i++)
            {
                if (str[i] != str[i - 1])
                {
                    answer.Append(str[i]);
                }
            }

            Console.WriteLine(answer.ToString());
        }
    }
}
