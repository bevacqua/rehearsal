# Rehearsal

> Persist standard input to a file, then simulate real-time program execution.

Ever needed to give a talk on a program and show exactly how the output is going to look like, and such?

To install `rehearsal`, use `npm`.

```shell
npm i -g rehearsal
```

To record the output of a program, pipe it through `rehearsal`, and then persist that to a file.

```shell
grunt ec2_list --color | rehearsal > scenario
```

Note that **your command is getting executed here**, we're just redirecting its output, so make sure that that doesn't blow up your repository, or production servers, or anything.

In this case, I had to use the `--color` argument because `chalk` won't produce any color coding, otherwise.

At any time, the scenario can be reproduced using the `reheasal <scenario>` command, as shown in the screenshot below.

[![rehearsal.png][1]][2]

Read some more on [Pony Foo][3]

  [1]: http://i.imgur.com/boNkRem.png
  [2]: https://github.com/bevacqua/rehearsal "bevacqua/rehearsal on GitHub"
  [3]: http://blog.ponyfoo.com/2013/12/24/rehearsal-record-program-output "Rehearsal: Record program output"
