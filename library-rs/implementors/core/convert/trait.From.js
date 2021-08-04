(function() {var implementors = {};
implementors["nekolib"] = [{"text":"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;M as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"nekolib/ds/struct.DisjointSparseTable.html\" title=\"struct nekolib::ds::DisjointSparseTable\">DisjointSparseTable</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::disjoint_sparse_table::DisjointSparseTable"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.bool.html\">bool</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"nekolib/ds/struct.RsDict.html\" title=\"struct nekolib::ds::RsDict\">RsDict</a>","synthetic":false,"types":["nekolib::ds::rs_dict::RsDict"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;&lt;A as <a class=\"trait\" href=\"nekolib/traits/trait.MonoidAction.html\" title=\"trait nekolib::traits::MonoidAction\">MonoidAction</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operand\" title=\"type nekolib::traits::MonoidAction::Operand\">Operand</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"nekolib/ds/struct.VecActSegtree.html\" title=\"struct nekolib::ds::VecActSegtree\">VecActSegtree</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"nekolib/traits/trait.MonoidAction.html\" title=\"trait nekolib::traits::MonoidAction\">MonoidAction</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operator\" title=\"type nekolib::traits::MonoidAction::Operator\">Operator</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operand\" title=\"type nekolib::traits::MonoidAction::Operand\">Operand</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::vec_act_segtree::VecActSegtree"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"nekolib/ds/struct.VecActSegtree.html\" title=\"struct nekolib::ds::VecActSegtree\">VecActSegtree</a>&lt;A&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operand\" title=\"type nekolib::traits::MonoidAction::Operand\">Operand</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"nekolib/traits/trait.MonoidAction.html\" title=\"trait nekolib::traits::MonoidAction\">MonoidAction</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operator\" title=\"type nekolib::traits::MonoidAction::Operator\">Operator</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A::<a class=\"type\" href=\"nekolib/traits/trait.MonoidAction.html#associatedtype.Operand\" title=\"type nekolib::traits::MonoidAction::Operand\">Operand</a> as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;M as <a class=\"trait\" href=\"nekolib/traits/trait.Magma.html\" title=\"trait nekolib::traits::Magma\">Magma</a>&gt;::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"nekolib/ds/struct.VecSegtree.html\" title=\"struct nekolib::ds::VecSegtree\">VecSegtree</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["nekolib::ds::vec_segtree::VecSegtree"]},{"text":"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"nekolib/ds/struct.VecSegtree.html\" title=\"struct nekolib::ds::VecSegtree\">VecSegtree</a>&lt;M&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"nekolib/traits/trait.Monoid.html\" title=\"trait nekolib::traits::Monoid\">Monoid</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"nekolib/traits/trait.Magma.html#associatedtype.Set\" title=\"type nekolib::traits::Magma::Set\">Set</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u128.html\">u128</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"nekolib/ds/struct.WaveletMatrix.html\" title=\"struct nekolib::ds::WaveletMatrix\">WaveletMatrix</a>","synthetic":false,"types":["nekolib::ds::wavelet_matrix::WaveletMatrix"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i64.html\">i64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i8.html\">i8</a>&gt; for <a class=\"struct\" href=\"nekolib/math/struct.ModInt.html\" title=\"struct nekolib::math::ModInt\">ModInt</a>&lt;M&gt;","synthetic":false,"types":["nekolib::math::modint::ModInt"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i64.html\">i64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i16.html\">i16</a>&gt; for <a class=\"struct\" href=\"nekolib/math/struct.ModInt.html\" title=\"struct nekolib::math::ModInt\">ModInt</a>&lt;M&gt;","synthetic":false,"types":["nekolib::math::modint::ModInt"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i64.html\">i64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"nekolib/math/struct.ModInt.html\" title=\"struct nekolib::math::ModInt\">ModInt</a>&lt;M&gt;","synthetic":false,"types":["nekolib::math::modint::ModInt"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i64.html\">i64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i64.html\">i64</a>&gt; for <a class=\"struct\" href=\"nekolib/math/struct.ModInt.html\" title=\"struct nekolib::math::ModInt\">ModInt</a>&lt;M&gt;","synthetic":false,"types":["nekolib::math::modint::ModInt"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i64.html\">i64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"nekolib/math/struct.ModInt.html\" title=\"struct nekolib::math::ModInt\">ModInt</a>&lt;M&gt;","synthetic":false,"types":["nekolib::math::modint::ModInt"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i64.html\">i64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u16.html\">u16</a>&gt; for <a class=\"struct\" href=\"nekolib/math/struct.ModInt.html\" title=\"struct nekolib::math::ModInt\">ModInt</a>&lt;M&gt;","synthetic":false,"types":["nekolib::math::modint::ModInt"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i64.html\">i64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u32.html\">u32</a>&gt; for <a class=\"struct\" href=\"nekolib/math/struct.ModInt.html\" title=\"struct nekolib::math::ModInt\">ModInt</a>&lt;M&gt;","synthetic":false,"types":["nekolib::math::modint::ModInt"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"nekolib/traits/trait.AssocVal.html\" title=\"trait nekolib::traits::AssocVal\">AssocVal</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.i64.html\">i64</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.u64.html\">u64</a>&gt; for <a class=\"struct\" href=\"nekolib/math/struct.ModInt.html\" title=\"struct nekolib::math::ModInt\">ModInt</a>&lt;M&gt;","synthetic":false,"types":["nekolib::math::modint::ModInt"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"nekolib/seq/struct.KmpSearcher.html\" title=\"struct nekolib::seq::KmpSearcher\">KmpSearcher</a>&lt;T&gt;","synthetic":false,"types":["nekolib::seq::kmp::KmpSearcher"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"nekolib/seq/struct.SuffixArray.html\" title=\"struct nekolib::seq::SuffixArray\">SuffixArray</a>&lt;T&gt;","synthetic":false,"types":["nekolib::seq::suffix_array::SuffixArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"nekolib/seq/struct.SuffixArray.html\" title=\"struct nekolib::seq::SuffixArray\">SuffixArray</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.char.html\">char</a>&gt;","synthetic":false,"types":["nekolib::seq::suffix_array::SuffixArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"nekolib/seq/struct.SuffixArray.html\" title=\"struct nekolib::seq::SuffixArray\">SuffixArray</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.usize.html\">usize</a>&gt;","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"nekolib/seq/struct.ZSearcher.html\" title=\"struct nekolib::seq::ZSearcher\">ZSearcher</a>&lt;T&gt;","synthetic":false,"types":["nekolib::seq::z_algo::ZSearcher"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.54.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"nekolib/utils/struct.Scanner.html\" title=\"struct nekolib::utils::Scanner\">Scanner</a>","synthetic":false,"types":["nekolib::utils::scanner::Scanner"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()