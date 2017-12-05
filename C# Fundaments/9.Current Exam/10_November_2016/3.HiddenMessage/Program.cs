using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hidden_Meassage
{
    class Program
    {
        static void Main()
        {
            
            string result = "";

            string s = Console.ReadLine();

            while (s != "end")
            {
                int ind = int.Parse(s);
                int step = int.Parse(Console.ReadLine());
                string line = Console.ReadLine();

                if (ind < 0)
                {
                    ind = line.Length + ind;
                }

                for (int i = ind; i < line.Length && i >= 0; i+= step)
                {
                    result += line[i];
                }

                s = Console.ReadLine();
            }

            

            Console.WriteLine(result);

        }
    }
}
