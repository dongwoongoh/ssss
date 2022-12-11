{
  function iter<T>(arr: Iterable<T>): T[] {
    return [...arr]
  }

  const result = iter([1, 2, 3, 4])
  console.log(result)

  function anyTest(anyArr: any): any {
    return anyArr
  }

  const anyResult = anyTest([1, 2, 3, 4])
  console.log(anyResult)
  console.clear()
}
{
  interface Props<T, K> {
    name: T
    age: K
  }
  function test({ name, age }: Props<string, number>): Props<string, number> {
    return { name, age }
  }
  const result = test({ name: 'mad', age: 1 })
  console.log(result)
  console.clear()
}
{
  interface Props<T, K> {
    name: T,
    age: K
  }
  function test<G = string, H = number>({ name, age }: Props<G, H>): Props<G, H> {
    return { name, age }
  }
  const result = test({ name: 'okok', age: '1' })
  console.log(result)
  console.clear()
}
{
  type Props<A, B> = {
    name: A,
    age: B
  }
  type InnerType<C = string, D = string> = Props<C, D>
  function test({ name, age }: InnerType): InnerType {
    return { name, age }
  }
  const output = test({ name: 'mad', age: '1' })
  type Result = ReturnType<typeof test>
  const result: Result = output
  console.log(result)
  console.clear()
}
{
  type X<Type> = { readonly [Property in keyof Type]: Type[Property] }
  type Y = { readonly name: string, readonly age: number }
  const user: X<Y> = { name: 'mad', age: 1 }
  console.log(user)
  console.clear()
}
{
  type Members = 'mad' | 'integral'
  type Result = `account_id: ${Members}`
  const mad: Result = 'account_id: mad'
  const integral: Result = 'account_id: integral'
  console.log(mad)
  console.log(integral)
}