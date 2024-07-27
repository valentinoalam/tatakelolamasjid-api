import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MemosService } from './memos.service';
import { CreateMemoInput } from './dto/create-memo.input';
import { UpdateMemoInput } from './dto/update-memo.input';

@Resolver('Memo')
export class MemosResolver {
  constructor(private readonly memosService: MemosService) {}

  @Mutation('createMemo')
  create(@Args('createMemoInput') createMemoInput: CreateMemoInput) {
    return this.memosService.create(createMemoInput);
  }

  @Query('memos')
  findAll() {
    return this.memosService.findAll();
  }

  @Query('memo')
  findOne(@Args('id') id: number) {
    return this.memosService.findOne(id);
  }

  @Mutation('updateMemo')
  update(@Args('updateMemoInput') updateMemoInput: UpdateMemoInput) {
    return this.memosService.update(updateMemoInput.id, updateMemoInput);
  }

  @Mutation('removeMemo')
  remove(@Args('id') id: number) {
    return this.memosService.remove(id);
  }
}
